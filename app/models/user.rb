# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :rooms, dependent: :destroy

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  # will capitalize first letter of names

  after_create :capitalize_user_names

  def capitalize_user_names
    update(first_name: first_name.capitalize, last_name: last_name.capitalize)
  end
end
