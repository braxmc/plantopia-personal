class ChangeSunlightFromIntToStr < ActiveRecord::Migration[6.0]
  def change
    remove_column :specs, :sunlight
    add_column :specs, :sunlight, :string
  end
end
