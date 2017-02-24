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
      type = 'distance driver'
      link = disc.css('.lead').at('a').attributes['href'].value

      doc = Nokogiri::HTML(open(link))

      desc = doc.css('#tab-description').text
      weights = doc.at_css('.input-block-level').text
      low = weights.scan(/\d/)[0,3].join.to_i
      high = weights.last(3).to_i

      # Disc.create(name: name, description: desc, disc_type: type)
      binding.pry
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
      type = 'fairway driver'
      link = disc.css('.lead').at('a').attributes['href'].value

      doc = Nokogiri::HTML(open(link))

      desc = doc.css('#tab-description').text

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
      type = 'mid range'
      link = disc.css('.lead').at('a').attributes['href'].value

      doc = Nokogiri::HTML(open(link))

      desc = doc.css('#tab-description').text

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
      type = 'putter approach'
      link = disc.css('.lead').at('a').attributes['href'].value

      doc = Nokogiri::HTML(open(link))

      desc = doc.css('#tab-description').text

      binding.pry
    end
  end

end