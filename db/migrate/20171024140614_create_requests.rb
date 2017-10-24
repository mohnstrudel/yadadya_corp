class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.string :full_name
      t.string :email
      t.string :phone
      t.string :body

      t.timestamps
    end
  end
end
