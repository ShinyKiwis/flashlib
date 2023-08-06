class AddFclassIdToDecks < ActiveRecord::Migration[7.0]
  def change
    add_reference :decks, :fclass, foreign_key: true
  end
end
