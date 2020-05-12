require 'test_helper'

class ProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @profile = profiles(:one)
  end

  test "should get index" do
    get profiles_url, as: :json
    assert_response :success
  end

  test "should create profile" do
    assert_difference('Profile.count') do
      post profiles_url, params: { profile: { date: @profile.date, friends: @profile.friends, fwb: @profile.fwb, hook_up: @profile.hook_up, ltr: @profile.ltr, networking: @profile.networking, user_id: @profile.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show profile" do
    get profile_url(@profile), as: :json
    assert_response :success
  end

  test "should update profile" do
    patch profile_url(@profile), params: { profile: { date: @profile.date, friends: @profile.friends, fwb: @profile.fwb, hook_up: @profile.hook_up, ltr: @profile.ltr, networking: @profile.networking, user_id: @profile.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy profile" do
    assert_difference('Profile.count', -1) do
      delete profile_url(@profile), as: :json
    end

    assert_response 204
  end
end
