class Plant < ApplicationRecord
  belongs_to :room
  has_many :routines, dependent: :destroy
  has_many :specs, dependent: :destroy

  after_create :capitalize_name_and_sun

  def capitalize_name_and_sun
    update(name: name.capitalize, species: species.capitalize)
  end
end
