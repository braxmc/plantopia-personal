class Routine < ApplicationRecord
  belongs_to :plant

  after_create :capitalize_routine_action

  def capitalize_routine_action
    update(action: action.capitalize)
  end
end
