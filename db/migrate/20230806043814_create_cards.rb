class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer
      t.json :images

      t.timestamps
    end
  end
end
