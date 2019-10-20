class BloodGlucosesController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        blood_glucose = BloodGlucose.new(blood_glucose_params)
        blood_glucose.date_time = DateTime.now
        blood_glucose.save
        if blood_glucose.valid?
            render json: {blood_glucose: BloodGlucoseSerializer.new(blood_glucose)}, status: :created
        else
            render json: { error: 'failed to create data' }, status: :not_acceptable
        end
    end

    private

    def blood_glucose_params
        params.require(:health_data).permit(:patient_id, :value)
    end
end
