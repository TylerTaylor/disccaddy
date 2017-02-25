namespace :get_images do
  require 'open-uri'

  desc 'Scrape for images'
  task get_images: :environment do


    # url = "https://discsunlimited.net/image/cache/data/abc/bee-line-platinum-90x90.jpg"
    discs = Disc.all
    dir = 'app/assets/images'

    def download_image(url, newfile, dir)
      open(url) do |u|
        File.open(File.join(Dir.pwd, dir, newfile), 'wb') do |f|
          f.write(u.read)
        end
      end
    end

    discs.each do |disc|
      open(disc.thumbnail_url) do |u|
        disc.thumbnail = u.read
        disc.save
      end
    end

    # download_image(url, url.split('/').last, dir)

  end
end