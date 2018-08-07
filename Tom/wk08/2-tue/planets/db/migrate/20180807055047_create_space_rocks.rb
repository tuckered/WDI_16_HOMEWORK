class CreateSpaceRocks < ActiveRecord::Migration[5.2]
  def change
    create_table :space_rocks do |t|
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end
