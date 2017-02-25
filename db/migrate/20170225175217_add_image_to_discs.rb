class AddImageToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :image, :binary
  end
end
