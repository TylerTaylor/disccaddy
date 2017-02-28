namespace :scraper do
  require 'nokogiri'
  require 'open-uri'
  require 'pry'

  # desc 'Scrape all discs'
  # task scrape: :environment do
  #   log = ActiveSupport::Logger.new('log/scraper.log')
  #   start_time = Time.now

  #   Rake::Task['scraper:scrape_fairway'].execute

  #   end_time = Time.now
  #   duration = end_time - start_time
  #   formatted_time = Time.at(duration).utc.strftime("%H:%M:%S")
    
  #   log.info "Task completed."
  #   log.info "Time elapsed: #{formatted_time}"
  #   log.close
  # end

  desc 'Scrape all discs'
  task scrape: :environment do
    urls = {
      'distance': 'https://discsunlimited.net/disc-types/distance-drivers?limit=600',
      'fairway': 'https://discsunlimited.net/disc-types/fairway-drivers?limit=200',
      'midrange': 'https://discsunlimited.net/disc-types/mid-range-drivers?limit=300',
      'putter': 'https://discsunlimited.net/disc-types/disc-golf-putters-and-approach-discs?limit=300'
    }

    def scrape_discs(disc_type, url)
      doc = Nokogiri::HTML(open(url))

      discs = doc.css('.media')
      discs.shift # pops off the description paragraph at the top

      discs.each do |disc|
        name = disc.css('.lead').text
        type = disc_type
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

    log = ActiveSupport::Logger.new('log/scraper.log')
    start_time = Time.now

    # urls.each do |disc_type, url|
    #   scrape_discs(disc_type.to_s, url)
    # end

    scrape_discs("distance", 'https://discsunlimited.net/disc-types/distance-drivers?limit=600')

    end_time = Time.now
    duration = end_time - start_time
    formatted_time = Time.at(duration).utc.strftime("%H:%M:%S")

    log.info "Task completed."
    log.info "Time elapsed: #{formatted_time}"
    log.close
  end

end