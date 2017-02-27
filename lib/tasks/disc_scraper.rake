namespace :scraper do
  require 'nokogiri'
  require 'open-uri'
  require 'pry'

  desc 'Scrape all discs'
  task scrape: :environment do
    log = ActiveSupport::Logger.new('log/scraper.log')
    start_time = Time.now

    Rake::Task['scraper:scrape_fairway'].execute

    end_time = Time.now
    duration = end_time - start_time
    formatted_time = Time.at(duration).utc.strftime("%H:%M:%S")
    
    log.info "Task completed."
    log.info "Time elapsed: #{formatted_time}"
    log.close
  end

end