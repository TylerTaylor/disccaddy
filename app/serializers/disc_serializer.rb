class DiscSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :disc_type, 
             :thumbnail_url, :image_url,
             :low_weight, :high_weight
end
