namespace :get_images do
  require 'open-uri'

  desc 'Scrape for images'
  task get_images: :environment do

    # url = "https://discsunlimited.net/image/cache/data/abc/bee-line-platinum-90x90.jpg"
    discs = Disc.all
    dir = 'app/assets/images'

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

    discs.each do |disc|
      download_image(disc.thumbnail_url, disc.thumbnail_url.split('/').last, dir)

      disc.thumbnail_url = get_img_url(disc.thumbnail_url)
      disc.save
    end

    # download_image(url, url.split('/').last, dir)

  end
end