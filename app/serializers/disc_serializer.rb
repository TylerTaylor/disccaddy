class DiscSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :disc_type, 
             :thumbnail_url, :thumbnail, :image_url, :image,
             :low_weight, :high_weight
end
