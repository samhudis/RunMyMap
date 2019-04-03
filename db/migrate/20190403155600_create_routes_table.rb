class CreateRoutesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :routes_tables do |t|
      t.string :name, null: false
      t.string :polyline, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
