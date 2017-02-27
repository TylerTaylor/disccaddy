class RemoveThumbnailFromDiscs < ActiveRecord::Migration[5.0]
  def change
    remove_column :discs, :thumbnail, :binary
  end
end
