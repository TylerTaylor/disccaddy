class RemoveImageFromDiscs < ActiveRecord::Migration[5.0]
  def change
    remove_column :discs, :image, :binary
  end
end
