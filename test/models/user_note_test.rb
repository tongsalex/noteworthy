# == Schema Information
#
# Table name: user_notes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  note_id    :integer          not null
#  shortcut   :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class UserNoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
