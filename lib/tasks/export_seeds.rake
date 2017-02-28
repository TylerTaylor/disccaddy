namespace :export do 
  desc "Export Disc.all in a seeds.rb way"
  task seed: :environment do
    Disc.order(:id).all.each do |disc|
      puts "Disc.create(#{disc.serializable_hash.delete_if {|key, value| ['created_at','updated_at','id'].include?(key)}.to_s.gsub(/[{}]/,'')})"
    end
  end
end