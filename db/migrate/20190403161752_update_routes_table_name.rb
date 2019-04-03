class UpdateRoutesTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :routes_tables, :routes
  end
end
