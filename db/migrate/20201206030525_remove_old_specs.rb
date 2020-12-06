class RemoveOldSpecs < ActiveRecord::Migration[6.0]
  def change
    remove_column :specs, :ferilizer
    remove_column :specs, :temperature
    remove_column :specs, :humidity
    remove_column :specs, :fullsize
    remove_column :specs, :planting
    remove_column :specs, :perannual
    remove_column :specs, :plantgrowth
    remove_column :specs, :prune
    remove_column :specs, :repot
    remove_column :specs, :indoor
    remove_column :specs, :outdoor
    remove_column :specs, :pests
  end
end
