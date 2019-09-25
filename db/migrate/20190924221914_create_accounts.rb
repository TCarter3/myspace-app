class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.string :avatar

      t.timestamps
    end
  end
end
