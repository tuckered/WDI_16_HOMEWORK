class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :space_rocks
      t.text :body
      t.datetime :published_at
      t.timestamps
    end
  end
end
