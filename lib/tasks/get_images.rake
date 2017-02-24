namespace :get_images do
  require 'open-uri'

  desc 'Scrape for images'
  task get_images: :environment do
    binding.pry

    url = "https://discsunlimited.net/image/cache/data/abc/bee-line-platinum-90x90.jpg"
    def download_image(url, dest)
      open(url) do |u|
        File.open(dest, 'wb') { |f| f.write(u.read) }
      end
    end

    download_image(url, url.split('/').last)

  end
end