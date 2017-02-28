namespace :export do 
  desc "Export Disc.all in a seeds.rb way"
  task seed: :environment do
    log = ActiveSupport::Logger.new('log/exporting_seeds.log')
    start_time = Time.now

    Disc.order(:id).all.each do |disc|
      puts "Disc.create(#{disc.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end

    end_time = Time.now
    duration = end_time - start_time
    formatted_time = Time.at(duration).utc.strftime("%H:%M:%S")

    log.info "Task completed."
    log.info "Time elapsed: #{formatted_time}"
    log.close
  end
end