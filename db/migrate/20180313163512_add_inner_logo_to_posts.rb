class AddInnerLogoToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :logo_inner, :string
  end
end
