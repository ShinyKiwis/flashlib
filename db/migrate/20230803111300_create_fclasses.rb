class CreateFclasses < ActiveRecord::Migration[7.0]
  def change
    create_table :fclasses do |t|
      t.string :title
      t.string :class_img
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
