class AddDiscTypeToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :disc_type, :string
  end
end
