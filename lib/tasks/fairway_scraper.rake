namespace :scraper do
  require 'nokogiri'
  require 'open-uri'
  require 'pry'

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
      encoded_link = URI.encode(link)

      if disc.css('.media-object').first
        thumbnail_url = disc.css('.media-object').first.attributes['src'].value
      end

      doc = Nokogiri::HTML(open(encoded_link))

      desc = doc.css('#tab-description').text
      if doc.at_css('.input-block-level')
        weights = doc.at_css('.input-block-level').text
        low = weights.scan(/\d/)[0,3].join.to_i
        high = weights.last(3).to_i
      end

      # The image has two size options, 280x280 and 500x500
      # could make a method to grab both sizes.
      # Will use 280x280 for now
      image_url = doc.css('#image').first.attributes['src'].value

      Disc.create(
        name: name, 
        description: desc, 
        disc_type: type,
        thumbnail_url: thumbnail_url,
        image_url: image_url,
        low_weight: low,
        high_weight: high
      )
      # binding.pry
    end
  end

end