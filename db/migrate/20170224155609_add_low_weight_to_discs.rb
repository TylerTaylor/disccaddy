class AddLowWeightToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :low_weight, :integer
  end
end
