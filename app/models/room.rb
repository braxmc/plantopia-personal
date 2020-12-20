class Room < ApplicationRecord
  belongs_to :user
  has_many :plants, dependent: :destroy

  after_create :capitalize_name_and_sun

  def capitalize_name_and_sun
    update(name: name.capitalize, sun: sun.capitalize)
  end
end
