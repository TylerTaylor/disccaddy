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
      encoded_link = URI.encode(link)

      if disc.css('.media-object').first
        thumbnail_url = disc.css('.media-object').first.attributes['src'].value
      end

      doc = Nokogiri::HTML(open(URI.parse(encoded_link)))

      desc = doc.css('#tab-description').text
      if doc.at_css('.input-block-level')
        weights = doc.at_css('.input-block-level').text || nil
        low = weights.scan(/\d/)[0,3].join.to_i
        high = weights.last(3).to_i
      end

      # The image has two size options, 280x280 and 500x500
      # could make a method to grab both sizes.
      # Will use 280x280 for now
      if doc.css('#image').first
        image_url = doc.css('#image').first.attributes['src'].value
      end

      Disc.create(
        name: name, 
        description: desc, 
        disc_type: type,
        thumbnail_url: thumbnail_url,
        image_url: image_url,
        low_weight: low,
        high_weight: high
      )
    end
  end

end