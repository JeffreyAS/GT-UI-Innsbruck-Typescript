import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class TripAccommodationAddressPopup {
	tripAccommodationAddressPopupAdditionalTripAccommodationLV = PcfListView('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV');
	additionalTripAccommodationLV_tbAdd = PcfButton('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV_tb-Add');
	additionalTripAccommodationLV_tbAddnlAccommodationClearButton = PcfButton('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV_tb-AddnlAccommodationClearButton');
	additionalTripAccommodationLV_tbAddnlAccommodationDenyButton = PcfButton('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV_tb-AddnlAccommodationDenyButton');
	additionalTripAccommodationLV_tbAddnlAccommodationReviewButton = PcfButton('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV_tb-AddnlAccommodationReviewButton');
	additionalTripAccommodationLV_tbRemove = PcfButton('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV_tb-Remove');
	additionalTripAccommodationLV_tbSegmentApprovalButton = PcfButton('#TripAccommodationAddressPopup-AdditionalTripAccommodationLV_tb-SegmentApprovalButton');
	tripAccommodationAddressPopupAffectedTripAccommodationCardTab = PcfButton('#TripAccommodationAddressPopup-AffectedTripAccommodationCardTab');
	claimTripAccommodationDetailDVAccommodationCancelOnly = PcfComponent('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-AccommodationCancelOnly');
	claimTripAccommodationDetailDVAgentFees = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-AgentFees');
	claimTripAccommodationDetailDVApprove = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Approve');
	claimTripAccommodationDetailDVAssessment = PcfSelectInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Assessment');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerAddress_AddressType = PcfSelectInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-Address_AddressType');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerAddress_Description = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-Address_Description');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerAddress_Picker = PcfSelectInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-Address_Picker');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerAddress_ValidUntil = PcfDateValueInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-Address_ValidUntil');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerClaim_JurisdictionState = PcfSelectInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-Claim_JurisdictionState');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerClaim_LocationCode = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-Claim_LocationCode');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine1 = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressLine1');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressLine1Kanji');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine2 = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressLine2');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressLine2Kanji');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressSummary = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressSummary');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-City');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCityKanji = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-CityKanji');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCountry = PcfSelectInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-Country');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetPostalCode = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-PostalCode');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState = PcfSelectInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-State');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine3 = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-AddressLine3');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCEDEX = PcfCheckBox('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-CEDEX');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCEDEXBureau = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-CEDEXBureau');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCityAutoFillIcon = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-City-AutoFillIcon');
	tripAccommodationAddressPopupClaimPolicyTripAccommodationDetailDVClaimTripAccommodationDetailDVCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCounty = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-County');
	claimTripAccommodationDetailDVCancellationFees = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-CancellationFees');
	claimTripAccommodationDetailDVCheckin = PcfDateValueInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Checkin');
	claimTripAccommodationDetailDVCheckout = PcfDateValueInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Checkout');
	claimTripAccommodationDetailDVClear = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Clear');
	claimTripAccommodationDetailDVDeny = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Deny');
	claimTripAccommodationDetailDVFinancialImpact = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-FinancialImpact');
	claimTripAccommodationDetailDVOtherFees = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-OtherFees');
	claimTripAccommodationDetailDVPaidAmount = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-PaidAmount');
	claimTripAccommodationDetailDVPropertyName = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-PropertyName');
	claimTripAccommodationDetailDVReasonForDenial = PcfTextInput('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-ReasonForDenial');
	claimTripAccommodationDetailDVReview = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV-Review');
	claimTripAccommodationDetailDV_tbCancel = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV_tb-Cancel');
	claimTripAccommodationDetailDV_tbEdit = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV_tb-Edit');
	claimTripAccommodationDetailDV_tbUpdate = PcfButton('#TripAccommodationAddressPopup-ClaimPolicyTripAccommodationDetailDV-ClaimTripAccommodationDetailDV_tb-Update');
	tripAccommodationAddressPopupTripAccommodationAddressPopup_UpLink = PcfButton('#TripAccommodationAddressPopup-TripAccommodationAddressPopup_UpLink');
	tripAccommodationAddressPopup_Paging = PcfButton('#TripAccommodationAddressPopup-_Paging');
	tripAccommodationAddressPopup__crumb__ = PcfComponent('#TripAccommodationAddressPopup-__crumb__');
	tripAccommodationAddressPopup_msgs = PcfButton('#TripAccommodationAddressPopup-_msgs');
}