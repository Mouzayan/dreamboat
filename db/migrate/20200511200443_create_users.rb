class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :dream_scene
      t.string :mantra

      t.timestamps
    end
  end
end
