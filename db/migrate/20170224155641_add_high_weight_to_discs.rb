class AddHighWeightToDiscs < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :high_weight, :integer
  end
end
