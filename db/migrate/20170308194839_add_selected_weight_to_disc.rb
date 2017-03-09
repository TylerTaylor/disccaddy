class AddSelectedWeightToDisc < ActiveRecord::Migration[5.0]
  def change
    add_column :discs, :selected_weight, :integer
  end
end
