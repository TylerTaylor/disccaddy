namespace :get_images do
  require 'open-uri'

  desc 'Scrape for images'
  task get_images: :environment do

    log = ActiveSupport::Logger.new('log/image_setup.log')
    start_time = Time.now

    discs = Disc.all
    dir = 'app/assets/images'

    distance = Disc.where(disc_type: 'distance').order(:id)
    fairway = Disc.where(disc_type: 'fairway').order(:id)
    midrange = Disc.where(disc_type: 'midrange').order(:id)
    putter = Disc.where(disc_type: 'putter').order(:id)

    def download_image(url, newfilename, dir)
      open(url) do |u|
        File.open(File.join(Dir.pwd, dir, newfilename), 'wb') do |f|
          f.write(u.read)
        end
      end
    end

    def get_img_url(url) 
      base = '/images/'
      filename = url.split('/').last
      url = base + filename
      return url
    end

    def get_images(discs)
      dir = 'app/assets/images'

      discs.each do |disc|
        if disc.thumbnail_url
          begin
            link = URI.encode(disc.thumbnail_url)

            download_image(URI.parse(link), disc.thumbnail_url.split('/').last, dir)

            disc.thumbnail_url = get_img_url(disc.thumbnail_url)
            disc.save
          rescue URI::InvalidURIError => e
            puts "error: #{e}"
          end
        end
      end
    end

    log.info "Getting images for distance"
    get_images(distance)

    log.info "Getting images for fairway"
    get_images(fairway)

    log.info "Getting images for midrange"
    get_images(midrange)

    log.info "Getting images for putter"
    get_images(putter)

    end_time = Time.now
    duration = end_time - start_time
    formatted_time = Time.at(duration).utc.strftime("%H:%M:%S")

    log.info "Task completed."
    log.info "Time elapsed: #{formatted_time}"
    log.close

    # download_image(url, url.split('/').last, dir)

  end
end