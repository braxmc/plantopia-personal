class ChangeSunAmountToSun < ActiveRecord::Migration[6.0]
  def change
    remove_column :rooms, :sun_amount
    add_column :rooms, :sun, :string
  end
end
