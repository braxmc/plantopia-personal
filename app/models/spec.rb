class Spec < ApplicationRecord
  belongs_to :plant

  after_create :capitalize_spec_params

  def capitalize_spec_params
    update(water: water.capitalize, soil: soil.capitalize, annual: annual.capitalize, colors: colors.capitalize, sunlight: sunlight.capitalize)
  end
end
