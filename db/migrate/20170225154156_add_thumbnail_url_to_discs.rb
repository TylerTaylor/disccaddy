class AddThumbnailUrlToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :thumbnail_url, :string
  end
end
