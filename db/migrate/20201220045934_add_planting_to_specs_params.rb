class AddPlantingToSpecsParams < ActiveRecord::Migration[6.0]
  def change
    add_column :specs, :planting, :string
  end
end
