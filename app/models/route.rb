class Route < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :polyline, :user_id, presence: true
end