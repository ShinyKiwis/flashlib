class AddSlugToFclass < ActiveRecord::Migration[7.0]
  def change
    add_column :fclasses, :slug, :string
    add_index :fclasses, :slug, unique: true
  end
end
