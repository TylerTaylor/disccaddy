class AddThumbnailToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :thumbnail, :binary
  end
end
