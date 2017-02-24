namespace :scraper do
  require 'nokogiri'
  require 'open-uri'
  require 'pry'

  desc 'Scrape for distance drivers'
  task scrape_distance: :environment do
    url = 'https://discsunlimited.net/disc-types/distance-drivers?limit=600'
    doc = Nokogiri::HTML(open(url))

    discs = doc.css('.media')
    discs.shift

    discs.each do |disc|
      name = disc.css('.lead').text
      desc = disc.css('.description').text
      type = 'distance driver'
      # Disc.create(name: name, description: desc, disc_type: type)
    end
  end

  desc 'Scrape for fairway drivers'
  task scrape_fairway: :environment do
    url = 'https://discsunlimited.net/disc-types/fairway-drivers?limit=200'
    doc = Nokogiri::HTML(open(url))

    discs = doc.css('.media')
    discs.shift

    discs.each do |disc|
      name = disc.css('.lead').text
      desc = disc.css('.description').text
      type = 'fairway driver'
      binding.pry
    end
  end

  desc 'Scrape for mid range'
  task scrape_midrange: :environment do
    url = 'https://discsunlimited.net/disc-types/mid-range-drivers?limit=300'
    doc = Nokogiri::HTML(open(url))

    discs = doc.css('.media')
    discs.shift

    discs.each do |disc|
      name = disc.css('.lead').text
      desc = disc.css('.description').text
      type = 'mid range'
      binding.pry
    end
  end

  desc 'Scrape for putters & approach'
  task scrape_midrange: :environment do
    url = 'https://discsunlimited.net/disc-types/disc-golf-putters-and-approach-discs?limit=300'
    doc = Nokogiri::HTML(open(url))

    discs = doc.css('.media')
    discs.shift

    discs.each do |disc|
      name = disc.css('.lead').text
      desc = disc.css('.description').text
      type = 'putter approach'
      binding.pry
    end
  end

end