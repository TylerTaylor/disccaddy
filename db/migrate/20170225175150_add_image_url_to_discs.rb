class AddImageUrlToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :image_url, :string
  end
end
