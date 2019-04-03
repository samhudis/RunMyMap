class Route < ApplicationRecord
    validates :name, :polyline, :user_id, presence: true
end