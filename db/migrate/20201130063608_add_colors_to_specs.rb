class AddColorsToSpecs < ActiveRecord::Migration[6.0]
  def change
    add_column :specs, :colors, :string
  end
end
