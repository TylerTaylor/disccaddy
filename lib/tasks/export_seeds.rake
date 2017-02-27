namespace :export do 
  desc "Export Disc.all in a seeds.rb way"
  task seed: :environment do
    Disc.order(:id).all.each do |disc|
      # puts "Disc.create(name: disc.name, description: disc.description, thumbnail_url: disc.thumbnail_url, image_url: disc.image_url, low_weight: disc.low_weight, high_weight: disc.high_weight)"
      puts "Disc.create(#{disc.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end
  end
end