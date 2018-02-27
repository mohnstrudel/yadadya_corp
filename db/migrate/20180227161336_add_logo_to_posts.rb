class AddLogoToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :logo, :string
  end
end
